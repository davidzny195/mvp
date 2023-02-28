CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Rooms (
  -- room_id
  -- current_players
  -- max_players
);

CREATE TABLE PlayersInGame ();

CREATE TABLE PlayerHands ();

CREATE TABLE GameActions();

CREATE TABLE HandHistory ();

-- Statistics
CREATE TABLE GamePlayers ();

CREATE TABLE PlayerStats ();

CREATE TABLE GameStats ();

-- Chat
CREATE TABLE ChatMessages ();

-- Rules
CREATE TABLE Cards();

CREATE TABLE HandRanking ();