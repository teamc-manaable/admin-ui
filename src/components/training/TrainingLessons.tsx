import React from 'react';
import { BookOpen } from 'lucide-react';
import { Lesson } from '../../types/training';
import { EnrolledStudent } from '../../types/student';
import { LessonList } from '../LessonList';

interface TrainingLessonsProps {
  lessons: Lesson[];
  enrolledStudents: EnrolledStudent[];
  onUpdateAttendance: (lessonId: string, attendanceData: any) => void;
  isAdmin: boolean;
}

export function TrainingLessons({
  lessons,
  enrolledStudents,
  onUpdateAttendance,
  isAdmin
}: TrainingLessonsProps) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-indigo-500" />
          Lessons
        </h2>
        {lessons.length > 0 ? (
          <LessonList
            lessons={lessons}
            enrolledStudents={enrolledStudents}
            onUpdateAttendance={onUpdateAttendance}
          />
        ) : (
          <p className="text-gray-500 text-sm bg-gray-50 p-4 rounded-md">
            No lessons scheduled yet.
          </p>
        )}
      </div>
    </div>
  );
}