/*
  # Portfolio Website Database Schema

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Sender's name
      - `email` (text) - Sender's email address
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp when message was sent
      - `read` (boolean) - Whether the message has been read
    
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `detailed_description` (text) - Detailed project information for modal
      - `tech_stack` (text[]) - Array of technologies used
      - `image_url` (text) - Project preview image URL
      - `live_demo` (text) - Live demo URL
      - `github_url` (text) - GitHub repository URL
      - `category` (text) - Project category (fullstack, frontend, backend, etc.)
      - `featured` (boolean) - Whether to feature this project
      - `order_index` (int) - Display order
      - `created_at` (timestamptz) - Project creation timestamp

  2. Security
    - Enable RLS on both tables
    - Contact messages: anyone can insert, only authenticated users can read
    - Projects: anyone can read, only authenticated users can modify
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  detailed_description text,
  tech_stack text[] DEFAULT '{}',
  image_url text,
  live_demo text,
  github_url text,
  category text DEFAULT 'fullstack',
  featured boolean DEFAULT false,
  order_index int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);