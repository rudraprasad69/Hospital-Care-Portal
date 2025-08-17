"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardOverview } from "@/components/dashboard-overview"
import { MedicalRecords } from "@/components/medical-records"
import { AppointmentsManagement } from "@/components/appointments-management"
import { BillingSystem } from "@/components/billing-system"
import { UserProfile } from "@/components/user-profile"

export function PatientDashboard() {
  const [activeSection, setActiveSection] = useState("overview")

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview />
      case "medical-records":
        return <MedicalRecords />
      case "appointments":
        return <AppointmentsManagement />
      case "billing":
        return <BillingSystem />
      case "profile":
      case "settings":
        return <UserProfile />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onSectionChange={setActiveSection} />
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  )
}
