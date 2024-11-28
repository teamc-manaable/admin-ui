import { Training } from '../types/training';

export const mockTrainings: Training[] = [
  {
    id: '1',
    title: "React Advanced Concepts",
    description: "Deep dive into React hooks, context, and performance optimization techniques.",
    startDate: "2024-03-15",
    duration: "8 weeks",
    maxStudents: 20,
    enrolledStudents: [
      {
        id: '1',
        email: 'john.doe@manaable.com',
        name: 'John Doe',
        department: 'Engineering',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
        enrollmentDate: '2024-03-01',
        attendance: 85
      },
      {
        id: '2',
        email: 'jane.smith@manaable.com',
        name: 'Jane Smith',
        department: 'Design',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
        enrollmentDate: '2024-03-02',
        attendance: 90
      }
    ],
    lessons: [
      {
        id: '1-1',
        title: "Introduction to Advanced Hooks",
        date: "2024-03-15",
        startTime: "10:00",
        duration: "2 hours",
        zoomLink: "https://zoom.us/j/123456789",
        completionThreshold: 80,
        attendance: {
          lessonId: '1-1',
          completionThreshold: 80,
          studentAttendance: [
            {
              studentId: '1',
              entries: [
                { joinTime: "10:00", leaveTime: "10:45" },
                { joinTime: "11:00", leaveTime: "12:00" }
              ],
              attendancePercentage: 85,
              status: 'Completed'
            },
            {
              studentId: '2',
              entries: [
                { joinTime: "10:00", leaveTime: "11:30" },
                { joinTime: "11:40", leaveTime: "12:00" }
              ],
              attendancePercentage: 95,
              status: 'Completed'
            }
          ]
        }
      },
      {
        id: '1-2',
        title: "Context API Deep Dive",
        date: "2024-03-22",
        startTime: "10:00",
        duration: "2 hours",
        zoomLink: "https://zoom.us/j/123456789",
        completionThreshold: 80,
        attendance: {
          lessonId: '1-2',
          completionThreshold: 80,
          studentAttendance: [
            {
              studentId: '1',
              entries: [
                { joinTime: "10:00", leaveTime: "10:30" },
                { joinTime: "10:40", leaveTime: "11:15" },
                { joinTime: "11:30", leaveTime: "12:00" }
              ],
              attendancePercentage: 80,
              status: 'Completed'
            },
            {
              studentId: '2',
              entries: [
                { joinTime: "10:00", leaveTime: "12:00" }
              ],
              attendancePercentage: 100,
              status: 'Completed'
            }
          ]
        }
      }
    ]
  },
  {
    id: '2',
    title: "TypeScript Fundamentals",
    description: "Master TypeScript basics and advanced features for better type-safe applications.",
    startDate: "2024-03-20",
    duration: "6 weeks",
    maxStudents: 15,
    enrolledStudents: [
      {
        id: '3',
        email: 'mike.brown@manaable.com',
        name: 'Mike Brown',
        department: 'Product',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
        enrollmentDate: '2024-03-05',
        attendance: 75
      }
    ],
    lessons: [
      {
        id: '2-1',
        title: "TypeScript Basics",
        date: "2024-03-20",
        startTime: "14:00",
        duration: "2 hours",
        zoomLink: "https://zoom.us/j/987654321",
        completionThreshold: 80,
        attendance: {
          lessonId: '2-1',
          completionThreshold: 80,
          studentAttendance: [
            {
              studentId: '3',
              entries: [
                { joinTime: "14:00", leaveTime: "14:45" },
                { joinTime: "15:15", leaveTime: "16:00" }
              ],
              attendancePercentage: 75,
              status: 'Not Completed'
            }
          ]
        }
      }
    ]
  },
  {
    id: '3',
    title: "Modern JavaScript",
    description: "Learn the latest JavaScript features and best practices for modern web development.",
    startDate: "2024-04-01",
    duration: "4 weeks",
    maxStudents: 25,
    enrolledStudents: [],
    lessons: []
  }
];