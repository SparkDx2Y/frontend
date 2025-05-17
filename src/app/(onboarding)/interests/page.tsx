'use client'

import AuthLayout from "@/components/AuthLayout";
import { useState } from 'react'; // Import useState for managing state

// Define a list of interests based on your HTML example
const interests = [
  '90s Kid', 'Harry Potter', 'SoundCloud', 'Spa', 'Self Care', 'Heavy Metal',
  'House Parties', 'Gymnastics', 'Ludo', 'Maggi', 'Documentaries', 'Biryani',
  'Drama shows', 'Meditation', 'Foodie', 'Sushi', 'Spotify', 'Hockey',
  'Basketball', 'Fantasy movies', 'Home Workout', 'Theater', 'Cafe hopping',
  'Sneakers', 'Aquarium', 'Instagram', 'Hot Springs', 'Walking', 'Running',
  'Travel'
];

const MAX_INTERESTS = 5; // Define the maximum number of interests a user can select

export default function InterestsPage() {
  // State to keep track of selected interests
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Function to handle button clicks (selecting/deselecting interests)
  const handleInterestClick = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      // Deselect the interest
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else if (selectedInterests.length < MAX_INTERESTS) {
      // Select the interest if the max limit hasn't been reached
      setSelectedInterests([...selectedInterests, interest]);
    }
    // If selectedInterests.length >= MAX_INTERESTS and the interest is not already selected, do nothing.
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
         {/* Removed the "Add interest" main heading as per the HTML structure */}

        {/* Interests Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">What are you into?</h2>
          <p className="text-gray-400">You like what you like. Now, let everyone know.</p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {interests.map((interest) => {
            // Check if the current interest is selected
            const isSelected = selectedInterests.includes(interest);
            // Determine button class based on selection state
            const buttonClass = isSelected
              ? 'bg-primary text-white' // Class when selected
              : 'bg-dark-input text-gray-300 hover:bg-gray-800'; // Class when not selected

            return (
              <button
                key={interest} // Use interest text as key
                type="button" // Important to prevent form submission
                // Added fixed width, flex properties for centering, and padding
                className={`w-33 flex items-center justify-center text-center px-4 py-2 rounded-full text-sm transition-colors ${buttonClass}`}
                onClick={() => handleInterestClick(interest)} // Attach click handler
              >
                {interest}
              </button>
            );
          })}
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <button
            type="button" // Important to prevent form submission
            className={`w-full bg-primary text-white rounded-full px-8 py-4 font-medium text-lg transition-colors ${
              selectedInterests.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
            }`}
            disabled={selectedInterests.length === 0} // Disable button if no interests selected
            // onClick handler will be added here later for saving data
          >
            Save ({selectedInterests.length}/{MAX_INTERESTS}) {/* Dynamic button text */}
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
