export const routes = [
  {
    title: "Dashboard",
    name: "dashboard",
    icon: "dashboard",
    route: "/doctor/dashboard",
  },
  { title: "My Calendar", icon: "book_online", route: "/doctor/appointments" },
  {
    title: "My Appointment",
    name: "appointment",
    icon: "personal_injury",
    route: "/doctor/my-patients",
  },
  {
    title: "E-Store",
    name: "estore",
    icon: "hourglass_bottom",
    route: "/doctor/schedule-timing",
  },
  {
    title: "My Plans",
    name: "palns",
    icon: "schedule",
    route: "/doctor/available-timings",
  },
  {
    title: "My Patients",
    name: "patients",
    icon: "receipt_long",
    route: "/doctor/invoices",
  },
  {
    title: "Reminders",
    name: "reminders",
    icon: "point_of_sale",
    route: "/doctor/accounts",
  },
  {
    title: "Schedule Timings",
    name: "schedule",
    icon: "reviews",
    route: "/doctor/reviews",
  },
  {
    title: "Available Time",
    name: "time",
    icon: "forum",
    route: "/doctor/message",
  },
  {
    title: "E-Prescriptions",
    name: "prescriptions",
    icon: "manage_accounts",
    route: "/doctor/profile",
  },
  {
    title: "Message",
    name: "communication",
    icon: "share",
    route: "/doctor/message",
  },
  {
    title: "Company",
    name: "company",
    icon: "share",
    route: "/doctor/social-media",
    subMenu: [
      {
        title: "My Invites",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "My Referrals",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Rate Us",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
    ],
  },
  {
    title: "Transactions",
    icon: "share",
    route: "/doctor/social-media",
    name: "transaction",
    subMenu: [
      {
        title: "My Coupons/Offers",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "My Orders",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "My Invoices",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Payment Methods",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Accounts",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Request Funds",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Withdrawals",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Favourites",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Reviews",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
    ],
  },
  {
    title: "My Profiles",
    name: "profiles",
    icon: "lock",
    route: "/doctor/change-password",
  },
  {
    title: "Settings",
    name: "setting",
    icon: "share",
    route: "/doctor/social-media",
    subMenu: [
      {
        title: "Language",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Country/State/City",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Change Passwords",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Notification",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
    ],
  },
  { title: "Sign Out", name: "signout", icon: "logout", route: "" },
];
