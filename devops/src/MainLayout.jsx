import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router'

export default function MainLayout() {
    return (
        <div className="min-h-screen">
            <header className="flex gap-x-5 justify-end py-4">
                <NavLink to="/"> Main</NavLink>
                <NavLink to="/di">Di</NavLink>
                <NavLink to="/maria">Maria</NavLink>
            </header>

            <main className="flex-1 pt-16">
                <Outlet />
            </main>
        </div>
    )
}
