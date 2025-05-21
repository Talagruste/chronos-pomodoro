import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, Sun, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

type TemasDisponiveis = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<TemasDisponiveis>(() => {
        const storageTheme = (localStorage.getItem('theme') as TemasDisponiveis) || 'dark';
        return storageTheme
    })

    const nextThemeIcon ={
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme == 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <nav className={styles.menu}>
        <Link className={styles.menuLink} to='/' aria-label='Ir para a home' title='Ir para a home'>
            <HouseIcon/>
        </Link>
        <Link className={styles.menuLink} to='#' aria-label='Ver histórico' title='Ver histórico'>
            <HistoryIcon/>
        </Link>
        <Link className={styles.menuLink} to='#' aria-label='Configurações' title='Configurações'>
            <SettingsIcon/>
        </Link>
        <Link className={styles.menuLink} to='#' aria-label='Mudar tema' title='Mudar tema' onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </Link>
    </nav>;
}