export type UserRole = "guest" | "student" | "instructor" | "admin";

interface NavItem {
  label: string;
  href: string;
}

type RoleBasedLinks = Record<UserRole, NavItem[]>;

export const navLinks: RoleBasedLinks = {
  guest: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Instructors", href: "/instructors" },
  ],

  student: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Courses", href: "/my-courses" },
    { label: "Profile", href: "/profile" },
  ],

  instructor: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Create Course", href: "/instructor/create" },
    { label: "My Courses", href: "/instructor/courses" },
  ],

  admin: [
    { label: "Admin Panel", href: "/admin" },
    { label: "Users", href: "/admin/users" },
    { label: "Courses", href: "/admin/courses" },
  ],
};
