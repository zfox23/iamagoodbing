export const onClickHash = (e) => {
    if (!(isBrowser && e)) {
        return;
    }
    e.preventDefault();

    const targetHash = e.target.getAttribute('href');

    document.querySelector(targetHash).scrollIntoView({
        behavior: 'smooth'
    });
    history.replaceState({}, '', e.target.href);
}

export const setTheme = (switchToDarkTheme) => {
    if (!isBrowser) {
        return;
    }

    if (switchToDarkTheme) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export const isBrowser = typeof window !== "undefined";
