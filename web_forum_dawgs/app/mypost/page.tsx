"use client";

import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import NavButton from "../components/NavButton";
import Link from "next/link";
import Card from "../components/Card";
import { tempPosts } from "../tempData/cards";

export default function MyPostsPage() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [posts, setPosts] = useState<typeof tempPosts>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === null) {
            localStorage.setItem("isLoggedIn", "false");
        }

        if (localStorage.getItem("isLoggedIn") === "false") {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, []);

    // Load userposts from the API.
    useEffect(() => {
        const controller = new AbortController();

        async function loadMyPosts() {
            try {
                const response = await fetch("/api/posts/my_posts", {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(
                        `Could not load your posts (${response.status}).`
                    );
                }

                const data = await response.json();

                if (!data || !Array.isArray(data.posts)) {
                    throw new Error("The API returned an invalid post list.");
                }

                setPosts(data.posts);
            } catch (error) {
                if (controller.signal.aborted) return;

                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unexpected error occurred.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        loadMyPosts();

        return () => controller.abort();
    }, []);

    return (
        <div className="min-h-screen pb-24 w-full bg-[#F3EAD6] overflow-x-hidden">
            <NavBar isLoggedIn={true} userName={"Ghost100"} />

            <div className="max-w-300 mx-auto px-6 flex flex-col items-center justify-center mt-[5%] gap-12">
                <h1 className="text-4xl font-bold text-center text-[#664930]">
                    My Posts
                </h1>

                {isLoading && (
                    <p role="status">Loading your posts...</p>
                )}

                {error && <p role="alert">{error}</p>}

                {!isLoading && !error && posts.length === 0 && (
                    <p>You haven’t created any posts yet.</p>
                )}
            </div>

            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
                {posts.map((card) => (
                    <Card
                        key={card.id}
                        isLoggedIn={isLoggedIn}
                        isMyPost={true}
                        postAuthor={card.author}
                        title={card.title}
                        time={card.time}
                        content={card.content}
                        postTag={card.postTag}
                        courseTag={card.courseTag}
                        likes={card.likes}
                        rating={card.rating}
                    />
                ))}
            </div>

            <div className="fixed bottom-8 right-8">
                {isLoggedIn && (
                    <Link href="/create">
                        <NavButton text="+" rounded="rounded-[100px]" />
                    </Link>
                )}
            </div>
        </div>
    );
}