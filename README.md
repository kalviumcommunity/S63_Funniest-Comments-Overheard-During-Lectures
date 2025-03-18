# **Project: Funniest Comments Overheard During Lectures**

## **Overview**
The "Funniest Comments Overheard During Lectures" project is a lighthearted platform where students can share and explore hilarious or out-of-context remarks heard during classes. With features like uploads, voting, and leaderboards, this project celebrates the quirks of campus life while showcasing your technical skills in building interactive, user-driven platforms.
   

## **Key Features**

1. **User Authentication**  
   - Secure login and signup using email/password or social media (Google/Facebook).  
   - Allows users to personalize their accounts for managing their uploads and votes.

2. **Content Uploads**  
   - Users can submit funny or bizarre comments they overhear during lectures.  
   - Each submission includes the comment, optional lecturer initials, tags, and the course or class where it was overheard.

3. **Voting System**  
   - Users can upvote or downvote comments, promoting the funniest ones to the top of the leaderboard.  

4. **Leaderboard**  
   - View weekly, monthly, and all-time top-rated comments.  
   - Leaderboards can be filtered by course or subject.  

5. **Tagging System**  
   - Submissions can be tagged with keywords like "funny," "awkward," "out of context," etc.  
   - Tags enable better search and categorization for users.

6. **Search and Filter**  
   - Search for comments using keywords or filter by tags, date, or popularity.  

7. **Commenting System**  
   - Users can comment on submissions, adding context or reactions to the remarks.

8. **Moderation Tools**  
   - Admin panel to manage flagged or inappropriate content.  
   - Ensures a safe and humorous environment for users.  


## **Tech Stack**

### **Frontend**  
- **React.js**: To build a dynamic and interactive interface.  
- **CSS/Tailwind**: For modern, responsive styling.  

### **Backend**  
- **Express.js (Node.js)**: For server-side logic and API endpoints.  
- **Mongoose**: To define and manage the schema for users, comments, and votes.

### **Database**  
- **MongoDB**: Stores user accounts, comments, votes, and tags.  

### **Authentication**  
- **Firebase Authentication or OAuth 2.0**: Secure user login and account management.

### **Media Storage**  
- **Firebase Storage or AWS S3**: (Optional) To handle and store images/screenshots of lecture slides or notes.

### **Deployment**  
- **Frontend**: Deployed using Vercel or Netlify.  
- **Backend**: Deployed using Heroku or AWS.  

### **Version Control**  
- **Git/GitHub**: For source code management and collaboration.


## **Why We Chose This Topic**

1. **Relatable and Engaging**  
   - College lectures are a goldmine of funny or absurd remarks. This platform resonates with students' everyday experiences, making it fun and highly engaging.

2. **User-Generated Content**  
   - Encourages active participation, ensuring fresh and humorous content regularly.

3. **Skill Development**  
   - The project showcases critical web development skills, such as:  
     - Media handling: Submitting and managing user content.  
     - Database structuring: Organizing user data, votes, and tags.  
     - Dynamic UI: Creating interactive, responsive components.  

4. **Scalability**  
   - Features like gamification (badges for top users) or integration with college events can be added.  
   - Mobile app development for easier on-the-go participation is a potential future expansion.  

5. **Unique and Unconventional**  
   - The project stands out by focusing on humor and relatability, steering away from conventional project ideas.


## **How to Run the Project**

### **Prerequisites**
- Node.js  
- MongoDB  
- Git  

### **Steps**
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/funniest-comments.git
   ```
2. Install dependencies for both frontend and backend:  
   ```bash
   cd funniest-comments  
   npm install  
   cd frontend  
   npm install  
   ```
3. Start the backend:  
   ```bash
   cd ..  
   npm run dev  
   ```
4. Start the frontend:  
   ```bash
   cd frontend  
   npm run dev  
   ```
5. Access the app at `http://localhost:3000`.  


## **Future Features**
- **Gamification**: Badges and leaderboards for top contributors.  
- **Mobile App**: A React Native app for seamless interaction.  
- **AI Integration**: Sentiment analysis or humor detection for better moderation.  

  
