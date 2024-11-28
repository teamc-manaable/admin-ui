import React from 'react';
import { Users } from 'lucide-react';
import { EnrolledStudent, Student } from '../../types/student';
import { StudentList } from '../StudentList';

interface TrainingStudentsProps {
  students: EnrolledStudent[];
  onRemoveStudent: (studentId: string) => void;
  isAdmin: boolean;
  availableStudents: Student[];
  onAddStudent: (studentId: string) => void;
}

export function TrainingStudents({
  students,
  onRemoveStudent,
  isAdmin,
  availableStudents,
  onAddStudent
}: TrainingStudentsProps) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2 text-indigo-500" />
          Enrolled Students
        </h2>
        {students.length > 0 ? (
          <StudentList
            students={students}
            onRemoveStudent={isAdmin ? onRemoveStudent : undefined}
            isAdmin={isAdmin}
          />
        ) : (
          <p className="text-gray-500 text-sm bg-gray-50 p-4 rounded-md">
            No students enrolled yet.
          </p>
        )}
      </div>
    </div>
  );
}