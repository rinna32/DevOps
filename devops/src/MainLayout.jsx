import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router'

export default function MainLayout() {
    return (
        <div className="container mx-auto">
            <header className="flex gap-x-5 justify-end py-4">
                <NavLink to="/"> Main</NavLink>
                <NavLink to="/di">Di</NavLink>
                <NavLink to="/maria">Maria</NavLink>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
