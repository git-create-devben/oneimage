"use client"
import { useView } from "@/store/useView";
import { Grid3x3, RowsIcon, Search } from "lucide-react";
import { useState } from "react";
import { SearchComp } from "./Search";

const Navbar = () => {
    const { SetView } = useView()

    return (
        <main className="p-4 md:flex md:justify-between items-center">
            {/* OneImage Logo */}
            <div className="md:justify-normal flex justify-center px-4 py-2 cursor-pointer hover:opacity-80 transition-opacity ">
                <span className="md:text-2xl text-sm flex md:flex-none font-light tracking-wider select-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    ONE <b className="font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">IMAGE</b>
                </span>
            </div>
            <div className="flex items-center justify-between  text-amber-50 gap-4 cursor-pointer h">
                <SearchComp />
                <div className="flex border gap-2 border-gray-700 rounded-sm p-2">
                    <Grid3x3 className="over:opacity-80 transition-opacity" onClick={() => SetView("Grid")} />
                    <RowsIcon className="over:opacity-80 transition-opacity" onClick={() => SetView("Column")} />
                </div>
            </div>
        </main>
    )
}

export default Navbar;