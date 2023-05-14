import React, { createContext, useContext, useState } from 'react'

interface LoggedInContextValue {
  loggedInAddress: string
  setLoggedInAddress: (address: string) => void
}

interface LoggedInProviderProps {
  children: React.ReactNode
}

const LoggedInContext = createContext<LoggedInContextValue | null>(null)

export const LoggedInProvider: React.FC<LoggedInProviderProps> = ({
  children,
}) => {
  const [loggedInAddress, setLoggedInAddress] = useState('')

  return (
    <LoggedInContext.Provider value={{ loggedInAddress, setLoggedInAddress }}>
      {children}
    </LoggedInContext.Provider>
  )
}

export const useLoggedIn = (): LoggedInContextValue => {
  const context = useContext(LoggedInContext)
  if (!context) {
    throw new Error('useLoggedIn must be used within a LoggedInProvider')
  }
  return context
}
