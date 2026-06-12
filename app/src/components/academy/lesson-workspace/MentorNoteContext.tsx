"use client";

import React, { createContext, useContext } from "react";

interface MentorNoteContextType {
  mentorText?: string;
  mentorAnalogy?: string;
}

const MentorNoteContext = createContext<MentorNoteContextType>({});

export const MentorNoteProvider = MentorNoteContext.Provider;

export const useMentorNote = () => useContext(MentorNoteContext);
