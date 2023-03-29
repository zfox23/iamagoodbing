const isBrowser = typeof window !== "undefined";

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
