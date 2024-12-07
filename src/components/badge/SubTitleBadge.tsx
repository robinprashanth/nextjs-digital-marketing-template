import React from 'react'
import { Badge } from '../ui/badge'
type Props = {
    text: string
}

const SubTitleBadge = ({ text }: Props) => {
  return (
    <Badge 
      variant="outline" 
      className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400"
    >
      {text}
    </Badge>
  )
}

export default SubTitleBadge