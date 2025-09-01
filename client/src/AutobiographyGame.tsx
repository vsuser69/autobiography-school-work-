import React, { useState, useEffect } from 'react';


const storyData = {
  chapters: {
    start: {
      title: 'Welcome to My Story',
      content: `Hi! I was born in Cambridge, UK in 2014. My family is Russian, so I grew up speaking Russian at home while learning English.

This gave me a unique perspective on language and culture. What would you like to know about?`,
      choices: [
        { text: 'Show me your life timeline', nextChapter: 'timeline' },
        { text: 'Tell me about your early years', nextChapter: 'early-years' },
        { text: 'Learn about your Russian family', nextChapter: 'family' }
      ]
    },
    'early-years': {
      title: 'Early Years in Cambridge',
      content: `My early childhood in Cambridge was filled with discovery. I learned about the world through two languages and two cultures.

Our house became my first classroom, where I learned Russian from my parents and slowly picked up English from the world around us.`,
      choices: [
        { text: 'How did you learn English?', nextChapter: 'language' },
        { text: 'Tell me about starting school', nextChapter: 'school' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    family: {
      title: 'Growing Up Russian in Cambridge',
      content: `Growing up in a Russian family in Cambridge was special. At home, we spoke Russian - the language of family, stories, and traditions. My parents made sure I understood my heritage while preparing me for life in the UK.`,
      choices: [
        { text: 'How did you balance two cultures?', nextChapter: 'culture' },
        { text: 'Tell me about starting school', nextChapter: 'school' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    language: {
      title: 'Learning English',
      content: `Learning English was both challenging and exciting. It felt like living in two different worlds - Russian at home and English everywhere else.

I watched British children's shows, read English books, and slowly picked up the language.`,
      choices: [
        { text: 'I was ready for school!', nextChapter: 'school' },
        { text: 'Tell me more about early education', nextChapter: 'education' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    school: {
      title: 'My First School: Local Nursery',
      content: `My first school was a small nursery near our house. It was perfect for a child still getting comfortable with English.

I made my first English-speaking friends there. Other children were curious about my ability to speak Russian.`,
      choices: [
        { text: 'What happened next?', nextChapter: 'sancton-wood' },
        { text: 'Tell me about your friends', nextChapter: 'friends' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    'sancton-wood': {
      title: 'Moving to Sancton Wood',
      content: `After nursery, I moved to Sancton Wood for kindergarten and reception. This was my second school.

Sancton Wood was larger and more structured than the small nursery, with children of different ages.`,
      choices: [
        { text: 'What do you remember most?', nextChapter: 'memories' },
        { text: 'When did you move to Stephen Perse?', nextChapter: 'stephen-perse' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    'stephen-perse': {
      title: 'Stephen Perse: Six Years of Growth',
      content: `The move to Stephen Perse marked the longest period I would spend at any school - six wonderful years. This was my third school.

It was here that two major interests began to shape my life: tennis and eventually, coding.`,
      choices: [
        { text: 'When did you discover tennis?', nextChapter: 'tennis' },
        { text: 'What was academic life like?', nextChapter: 'academics' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    tennis: {
      title: 'Discovering Tennis',
      content: `Tennis entered my life like a spark that ignited into a passion. I'm not sure what first drew me to the sport - maybe the precision, the individual challenge, or the satisfying sound of a well-hit ball.

What started as casual interest quickly became serious. I found myself spending more and more time on the court.`,
      choices: [
        { text: 'Tell me about your first tournament', nextChapter: 'tournament' },
        { text: 'How did you reach competition level?', nextChapter: 'competitive' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    competitive: {
      title: 'Competitive Tennis Career',
      content: `Reaching competitive level in tennis was a journey of dedication and practice. What started as a fun activity became a serious pursuit that defined much of my teenage years.

I have competed in over 100 tournaments, and each one taught me something new.`,
      choices: [
        { text: 'What were your tournament highlights?', nextChapter: 'highlights' },
        { text: 'When did you move to Perse?', nextChapter: 'perse' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    highlights: {
      title: 'Tournament Highlights',
      content: `My tournament highlights include winning several regional championships and representing my school in team competitions. Each victory taught me about perseverance and the importance of mental strength.

The most memorable moments weren't always the wins, but the friendships I made and the lessons I learned from both victories and defeats.`,
      choices: [
        { text: 'When did you move to Perse?', nextChapter: 'perse' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    tournament: {
      title: 'My First Tournament',
      content: `My first tournament was both exciting and nerve-wracking. I remember the butterflies in my stomach and the thrill of competing against other players for the first time.

Even though I didn't win, I learned that tournaments were about more than just winning - they were about testing my skills and growing as a player.`,
      choices: [
        { text: 'How did you reach competition level?', nextChapter: 'competitive' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    friends: {
      title: 'My First Friends',
      content: `My first English-speaking friends were curious about my Russian background. They asked questions about the language and wanted to learn some Russian words.

This helped me feel more confident about being different and taught me that diversity is something to celebrate.`,
      choices: [
        { text: 'What happened next?', nextChapter: 'sancton-wood' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    memories: {
      title: 'Memories from Sancton Wood',
      content: `I remember the excitement of being in a bigger school with more children. The structured learning environment was new to me, and I enjoyed the routine and new friendships.

The teachers were patient with my English, and I gradually became more confident speaking in class.`,
      choices: [
        { text: 'When did you move to Stephen Perse?', nextChapter: 'stephen-perse' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    academics: {
      title: 'Academic Life at Stephen Perse',
      content: `Academic life at Stephen Perse was challenging but rewarding. The teachers encouraged curiosity and critical thinking, which helped me develop as a student.

I enjoyed subjects like mathematics and science, where I could apply logical thinking - skills that would later help me with coding.`,
      choices: [
        { text: 'When did you discover tennis?', nextChapter: 'tennis' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    culture: {
      title: 'Balancing Two Cultures',
      content: `Balancing two cultures meant celebrating both Russian traditions and British customs. At home, we had Russian food, celebrated Russian holidays, and spoke Russian.

Outside, I embraced British culture - school traditions, local customs, and making friends with children from different backgrounds.`,
      choices: [
        { text: 'Tell me about starting school', nextChapter: 'school' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    education: {
      title: 'Early Education',
      content: `My early education focused on language development and social skills. My parents read Russian books to me, while I learned English through play and interaction with other children.

This dual approach helped me develop strong language skills in both languages from an early age.`,
      choices: [
        { text: 'I was ready for school!', nextChapter: 'school' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    balance: {
      title: 'Balancing Tennis and Studies',
      content: `Balancing tennis and studies required good time management. I learned to prioritize my schoolwork while still dedicating time to tennis practice and tournaments.

This balance taught me discipline and helped me develop strong organizational skills that I still use today.`,
      choices: [
        { text: 'When did you discover coding?', nextChapter: 'coding' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    'first-project': {
      title: 'My First Coding Project',
      content: `My first coding project was a simple calculator. It was basic, but I was amazed that I could create something useful with just a few lines of code.

This project taught me the fundamentals of programming and sparked my interest in creating more complex applications.`,
      choices: [
        { text: 'Tell me about creating this game', nextChapter: 'this-game' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    perse: {
      title: 'The Final Move: Perse School',
      content: `After six comfortable years at Stephen Perse, it was time for one final school change - moving to Perse, which would be my final school. This transition felt different from the others because I knew this would be where I would complete my education.

At Perse, I would not only continue my academic journey but also discover a new passion that would become incredibly important to me - coding.`,
      choices: [
        { text: 'When did you discover coding?', nextChapter: 'coding' },
        { text: 'How did you balance tennis and studies?', nextChapter: 'balance' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    coding: {
      title: 'Discovering Code',
      content: `Last year marked the beginning of another significant chapter in my life - my introduction to coding. Like tennis, coding started as curiosity but quickly became a passion.

There was something magical about writing code and seeing it come to life. The logical problem-solving aspect appealed to the same part of my mind that enjoyed tennis strategy.`,
      choices: [
        { text: 'What was your first coding project?', nextChapter: 'first-project' },
        { text: 'Tell me about creating this game', nextChapter: 'this-game' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    },
    'this-game': {
      title: 'Creating This Autobiography Game',
      content: `This game you're playing right now represents a unique intersection of my life experiences and my newfound passion for coding. It's more than just a project - it's a way to tell my story while demonstrating what I've learned about programming.

Creating an interactive autobiography seemed like the perfect way to combine storytelling with technology.`,
      choices: [
        { text: 'Show me the complete timeline', nextChapter: 'timeline' },
        { text: 'Start the story again', nextChapter: 'start' }
      ]
    },
    timeline: {
      title: 'My Life Timeline',
      content: `Here's the complete timeline of my journey so far. Each milestone represents not just an event, but a step in becoming who I am today.

From the early challenges of learning English to the dedication required for competitive tennis, from adapting to new schools to discovering the joy of coding - each experience has contributed to my growth.`,
      choices: [
        { text: 'Explore specific chapters', nextChapter: 'start' },
        { text: 'Go back to start', nextChapter: 'start' }
      ]
    }
  }
};

// Simple achievements system
const achievements = [
  { id: 'bilingual', title: 'Bilingual Master', icon: '🗣️' },
  { id: 'tennis', title: 'Tennis Discovery', icon: '🎾' },
  { id: 'tournaments', title: 'Tournament Veteran', icon: '🏆' },
  { id: 'coding', title: 'Code Warrior', icon: '💻' },
  { id: 'game', title: 'Story Creator', icon: '🎮' }
];

function AutobiographyGame() {
  const [currentChapter, setCurrentChapter] = useState('start');
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [showAchievements, setShowAchievements] = useState(false);

  const chapter = storyData.chapters[currentChapter];

  // Simple achievement unlocking
  const unlockAchievement = (achievementId: string) => {
    if (!unlockedAchievements.includes(achievementId)) {
      setUnlockedAchievements([...unlockedAchievements, achievementId]);
    }
  };

  // Handle choice selection
  const handleChoice = (choice: any) => {
    if (choice.nextChapter) {
      setCurrentChapter(choice.nextChapter);
      
      // Unlock achievements based on chapter
      if (choice.nextChapter === 'language') unlockAchievement('bilingual');
      if (choice.nextChapter === 'tennis') unlockAchievement('tennis');
      if (choice.nextChapter === 'competitive') unlockAchievement('tournaments');
      if (choice.nextChapter === 'coding') unlockAchievement('coding');
      if (choice.nextChapter === 'this-game') unlockAchievement('game');
    }
  };

  // Reset progress
  const resetProgress = () => {
    setCurrentChapter('start');
    setUnlockedAchievements([]);
  };

  if (showAchievements) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fdf4ff 0%, #fce7f3 100%)', padding: '16px' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: 0 }}>🏆 Achievements Unlocked</h1>
            <button
              onClick={() => setShowAchievements(false)}
              style={{ padding: '8px 16px', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              Back to Story
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                style={{
                  padding: '24px',
                  borderRadius: '8px',
                  border: '2px solid',
                  ...(unlockedAchievements.includes(achievement.id)
                    ? { backgroundColor: '#fefce8', borderColor: '#fde047' }
                    : { backgroundColor: '#f9fafb', borderColor: '#d1d5db' }
                  )
                }}
              >
                <div style={{ fontSize: '48', marginBottom: '8px' }}>{achievement.icon}</div>
                <h3 style={{ fontSize: '25', fontWeight: '600', margin: 0 }}>{achievement.title}</h3>
                <p style={{
                  fontSize: '14px',
                  margin: 0,
                  ...(unlockedAchievements.includes(achievement.id)
                    ? { color: '#059669' }
                    : { color: '#6b7280' }
                  ) 
                }}>
                  {unlockedAchievements.includes(achievement.id) ? 'Unlocked!' : 'Locked'}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={resetProgress}
              style={{ padding: '12px 24px', backgroundColor: '#dc2626', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              Reset Progress
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)', padding: '16px' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', margin: 0 }}>My Interactive Autobiography</h1>
            <p style={{ color: '#6b7280', marginTop: '8px', margin: 0 }}>
              Achievements: {unlockedAchievements.length} | Chapter: {currentChapter}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setShowAchievements(true)}
              style={{ padding: '8px 16px', backgroundColor: '#9333ea', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              🏆 Achievements
            </button>
            <button
              onClick={resetProgress}
              style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Main Chapter Content */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', margin: 0 }}>{chapter.title}</h2>
          <div style={{ color: '#374151', lineHeight: '1.6', marginBottom: '24px', whiteSpace: 'pre-line' }}>
            {chapter.content}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {chapter.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                style={{ width: '100%', textAlign: 'left', padding: '16px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', cursor: 'pointer' }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        {unlockedAchievements.length > 0 && (
          <div style={{ backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '8px', padding: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#92400e', marginBottom: '12px', margin: 0 }}>🎉 Recent Achievements</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {unlockedAchievements.slice(-3).map(achievementId => {
                const achievement = achievements.find(a => a.id === achievementId);
                return (
                  <div
                    key={achievementId}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '8px', padding: '8px 12px' }}
                  >
                    <span style={{ fontSize: '18px' }}>{achievement?.icon}</span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#92400e' }}>{achievement?.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AutobiographyGame;
