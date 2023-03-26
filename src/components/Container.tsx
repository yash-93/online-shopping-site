import React from 'react';

const styles = {
  container: `
    mx-auto
    w-screen
    lg:w-9/12
    xl:w-3/5
    bg-white
  `
};

type Props = {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
