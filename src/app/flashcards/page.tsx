"use client";

import FlashcardCarousel from "@/components/FlashcardCarousel";
import { group } from "console";
import React, { useState, useEffect } from "react";

const FlashcardsPage = () => {
  // Assume you fetch flashcard data from an API
  const [flashcards, setFlashcards] = useState([]);

  const handleFlashcardsFetch = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${apiUrl}flashcards/flashcards_view/`);

      if (response.ok) {
        const data = await response.json();

        // Group flashcards by UUID

        let groupedFlashcards: any = [];

        data.forEach((flashcard: any) => {
          const groupIndex = groupedFlashcards.findIndex(
            (group: any) => group.flashcard_id === flashcard.flashcard_id
          );

          if (groupIndex === -1) {
            groupedFlashcards.push({
              flashcard_id: flashcard.flashcard_id,
              flashcards: [flashcard],
            });
          } else {
            groupedFlashcards[groupIndex].flashcards.push(flashcard);
          }
        });

        console.log("Flashcards", groupedFlashcards);

        // Set flashcards state with grouped data
        setFlashcards(groupedFlashcards);
      } else {
        console.error("Failed to fetch flashcards");
      }
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  useEffect(() => {
    // Fetch flashcard data from your backend API
    // Example: fetch('/api/flashcards').then(res => res.json()).then(data => setFlashcards(data));
    // Make sure your backend API endpoint returns flashcard data in the same format as described
    // Sample data
    handleFlashcardsFetch();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Flashcards</h1>
      <button
        onClick={() => (window.location.href = "/flashcards/generate")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Flashcards
      </button>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Back to Home
      </button>
      {flashcards.length > 0 ? (
        flashcards.map((group: any) => (
          <FlashcardCarousel
            key={group.flashcard_id}
            flashcards={group.flashcards}
          />
        ))
      ) : (
        <p>No flashcards available</p>
      )}
    </div>
  );
};

export default FlashcardsPage;
