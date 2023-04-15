export const routes = [
  { title: "Dashboard", icon: "fas fa-columns", route: "/patient/dashboard" },
  {
    title: "My Vitals & Targets",
    icon: "fas fa-bookmark",
    route: "/patient/favourites",
  },
  { title: "E-Stores", icon: "fas fa-users", route: "/patient/dependents" },
  { title: "Message", icon: "fas fa-comments", route: "/patient/chat" },
  {
    title: "Doctor Building",
    icon: "fas fa-file-invoice-dollar",
    route: "/patient/accounts",
  },
  { title: "My Plans", icon: "fas fa-list-alt", route: "/patient/orders" },
  {
    title: "My Appointments",
    icon: "fas fa-clipboard",
    route: "/patient/medical-records",
  },
  {
    title: "My Reminders",
    icon: "fas fa-file-medical-alt",
    route: "/patient/medical-details",
  },
  {
    title: "My Family",
    icon: "fas fa-user-cog",
    route: "/patient/profile-settings",
  },
  {
    title: "Communication",
    icon: "fas fa-user-cog",
    route: "/patient/profile-settings",
    name:"communication",
    subMenu: [
      {
        title: "Video",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Voice",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Chat",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Social Media",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
    ],
  },
  {
    title: "My Medical Records",
    icon: "fas fa-user-cog",
    route: "/patient/profile-settings",
  },
  {
    title: "My Prescriptions",
    icon: "fas fa-user-cog",
    route: "/patient/profile-settings",
  },
  {
    title: "Medical Details",
    icon: "fas fa-user-cog",
    route: "/patient/profile-settings",
  },
  {
    title: "My Transactions",
    icon: "fas fa-user-cog",
    route: "/patient/profile-settings",
    name:"transaction",
    subMenu: [
      {
        title: "My Offers/Coupons",
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
    title: "Company",
    icon: "fas fa-lock",
    route: "/patient/change-password",
    name:"company",
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
    title: "Setting",
    icon: "fas fa-sign-out-alt",
    route: "/patient/logout",
    name:"setting",
    subMenu: [
      {
        title: "My Profile",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Language",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Country",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Change Password",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
      {
        title: "Notifications",
        icon: "fas fa-user-cog",
        route: "/patient/profile-settings",
      },
    ],
  },
  { title: "Sign Out", icon: "fas fa-sign-out-alt", route: "/patient/logout" },
];
