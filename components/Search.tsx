"use client"
import Form from "next/form"
import { Search } from "lucide-react";
import { useQuery } from "@/store/useQuery";
import { useState } from "react";

export const SearchComp = () => {
    const [input, setInput] = useState("");
    const {setQuery} = useQuery()

    const handleSubmit = (e: React.FormEvent) => {
        console.log(input)
        e.preventDefault();
        setQuery(input.trim());
        console.log(input)
    };
    return (
        <main>
            <div className="">
                <form onSubmit={handleSubmit} className="flex items-center">
                    <input type="search" name="search" id="search" value={input}
                        onChange={(e) => setInput(e.target.value)} placeholder="Search Image here" className="border-b-2 text-gray-400 outline-none peer" />
                    <Search className="over:opacity-80 transition-opacity peer" onMouseEnter={handleSubmit}/>
                </form>
            </div>
        </main>
    )
}