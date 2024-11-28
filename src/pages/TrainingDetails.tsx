import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockTrainings } from '../data/mockData';
import { mockStudents } from '../data/mockStudents';
import { Training, Lesson } from '../types/training';
import { TrainingHeader } from '../components/training/TrainingHeader';
import { TrainingInfo } from '../components/training/TrainingInfo';
import { TrainingLessons } from '../components/training/TrainingLessons';
import { TrainingStudents } from '../components/training/TrainingStudents';
import { useAuth } from '../contexts/AuthContext';

export function TrainingDetails() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth();
  const isAdmin = isAuthenticated && user?.role === 'admin';
  const [training, setTraining] = useState<Training | null>(null);

  useEffect(() => {
    const foundTraining = mockTrainings.find(t => t.id === id);
    if (foundTraining) {
      setTraining(foundTraining);
    }
  }, [id]);

  if (!training) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Training not found.</p>
      </div>
    );
  }

  const handleAddLesson = (data: any) => {
    const newLesson: Lesson = {
      id: `${training.id}-${training.lessons.length + 1}`,
      ...data,
      completionThreshold: 80
    };
    
    setTraining({
      ...training,
      lessons: [...training.lessons, newLesson]
    });
  };

  const handleAddStudent = (studentId: string) => {
    const studentToAdd = mockStudents.find(s => s.id === studentId);
    if (!studentToAdd) return;

    const newEnrolledStudent = {
      ...studentToAdd,
      enrollmentDate: new Date().toISOString(),
      attendance: 0
    };

    setTraining({
      ...training,
      enrolledStudents: [...training.enrolledStudents, newEnrolledStudent]
    });
  };

  const handleRemoveStudent = (studentId: string) => {
    setTraining({
      ...training,
      enrolledStudents: training.enrolledStudents.filter(s => s.id !== studentId)
    });
  };

  const handleUpdateAttendance = (lessonId: string, attendanceData: any) => {
    const updatedLessons = training.lessons.map(lesson => {
      if (lesson.id === lessonId) {
        return {
          ...lesson,
          ...attendanceData
        };
      }
      return lesson;
    });

    setTraining({
      ...training,
      lessons: updatedLessons
    });
  };

  const availableStudents = mockStudents.filter(
    student => !training.enrolledStudents.some(enrolled => enrolled.id === student.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <TrainingHeader training={training} isAdmin={isAdmin} onAddLesson={handleAddLesson} onAddStudent={handleAddStudent} />
      <TrainingInfo training={training} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TrainingLessons
          lessons={training.lessons}
          enrolledStudents={training.enrolledStudents}
          onUpdateAttendance={handleUpdateAttendance}
          isAdmin={isAdmin}
        />
        <TrainingStudents
          students={training.enrolledStudents}
          onRemoveStudent={handleRemoveStudent}
          isAdmin={isAdmin}
          availableStudents={availableStudents}
          onAddStudent={handleAddStudent}
        />
      </div>
    </div>
  );
}