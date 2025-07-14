# DSAverse - Interactive DSA Learning Platform

An interactive Data Structures and Algorithms learning platform with AI-powered assistance for personalized learning and skill development.

## Features

### 🧠 Interactive Quiz System
- **20 Random Questions**: Carefully curated DSA problems covering all major topics
- **Time Tracking**: 2 minutes per question with real-time countdown
- **Instant Feedback**: Detailed explanations for every answer
- **Performance Analysis**: Get insights on areas to improve

### 🤖 AI-Powered Learning Assistant
- **Context-Aware Help**: AI understands the current question and topic
- **Smart Hints**: Get targeted hints without spoiling the answer
- **Concept Explanations**: Detailed explanations of DSA concepts
- **Study Recommendations**: Personalized study tips and practice suggestions
- **Quick Actions**: One-click access to common queries

### 📊 Comprehensive Analytics
- **Category Performance**: Track progress by topic (Trees, Graphs, Sorting, etc.)
- **Difficulty Analysis**: See how you perform across Easy, Medium, and Hard questions
- **Time Analysis**: Monitor your solving speed and efficiency
- **Improvement Suggestions**: Get personalized recommendations for areas to focus on

## Topics Covered

- Arrays & Strings
- Linked Lists
- Stacks & Queues
- Trees & Graphs
- Sorting & Searching
- Dynamic Programming
- Hash Tables
- Heaps & Priority Queues

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **AI Assistant**: Built-in intelligent assistant
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pragathees03/DSAverse.git
   cd dsaverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

### Taking the Quiz
1. Click "Start Quiz" on the welcome screen
2. Read each question carefully and select your answer
3. Review the explanation after answering
4. Navigate between questions using Previous/Next buttons
5. View your final score and performance analysis

### Using the AI Assistant
1. Click "Show AI Assistant" to open the AI panel
2. Use quick action buttons for common queries:
   - **Explain current topic**: Get detailed explanations
   - **Give me a hint**: Receive contextual hints
   - **Show similar problems**: Get practice recommendations
   - **Study tips**: Receive personalized study advice
3. Type custom questions in the chat input
4. The AI will provide context-aware responses based on your current question

## AI Features

### Context Awareness
The AI assistant understands:
- Current question category and difficulty
- Your performance patterns
- Study progress and weak areas

### Smart Responses
- **Hints**: Provides helpful hints without giving away answers
- **Explanations**: Detailed concept explanations with examples
- **Practice Problems**: Suggests similar problems to practice
- **Study Tips**: Personalized advice based on your performance

### Quick Actions
- One-click access to common queries
- Context-aware suggestions
- Instant responses for better UX

## Customization

### Adding New Questions
Edit `src/data/dsaQuestions.ts` to add new questions:

```typescript
{
  id: 21,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 0, // Index of correct answer
  category: "Your Category",
  explanation: "Detailed explanation here",
  difficulty: "Easy" | "Medium" | "Hard",
  topics: ["Topic1", "Topic2"]
}
```

### Customizing AI Responses
Modify the response generation logic in `src/components/ai/QuizAI.tsx`:

```typescript
const generateAIResponse = (userMessage: string, question: any): string => {
  // Add your custom logic here
  return "Your custom response"
}
```

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Edit component styles in individual files

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team

## Roadmap

- [ ] Add more question categories
- [ ] Implement spaced repetition learning
- [ ] Add code execution for practice problems
- [ ] Integrate with external coding platforms
- [ ] Add multiplayer quiz mode
- [ ] Implement progress tracking across sessions
- [ ] Add mobile app version 