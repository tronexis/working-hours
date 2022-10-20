import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header = (props) => {
  const {asPath} = useRouter();
  const ActiveLink = (props) => {
    const style = asPath === props.href ? 'link active' : 'link'
    return <li className={style}><Link href={props.href}><a>{props.children}</a></Link></li>
  }

  return (
    <nav className="flex flex-col bg-[#202124] text-white justify-center items-center py-6 gap-1">
      <small className='font-light text-[.7rem]'>FRACTAL SECURITY</small>
      <ul className='flex gap-4'>
        <ActiveLink href="/overview">Overview</ActiveLink>
        <ActiveLink href="/analyze">Analyze</ActiveLink>
        <ActiveLink href="/settings">Settings</ActiveLink>
      </ul>
    </nav>
  )
};

export default Header;