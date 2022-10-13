window.onload = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    }

    const lessThreshold = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if(entry.isIntersecting){
                entry.target.classList.add('animated')
            } else {
                entry.target.classList.remove('animated')
            }
        })
    }, options)

    const lineObserver = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if(entry.isIntersecting){
                entry.target.classList.add('animated')
            } else {
                entry.target.classList.remove('animated')
            }
        })
    }, lessThreshold)

    const leftColumn = document.querySelectorAll('.history-item__wrapper.left-column')
    const rightColumn = document.querySelectorAll('.history-item__wrapper.right-column')
    const historyLine = document.querySelector('.history-line')
    const headings = document.querySelectorAll('.heading-anim')
    const portfolioCards = document.querySelectorAll('.portfolio-cards__column .card-item')
    const skillsItem = document.querySelectorAll('.marquee-list .list-item')
    const sections = document.querySelectorAll('.section-anim')

    leftColumn.forEach(i => {
        observer.observe(i)
    })

    rightColumn.forEach(i => {
        observer.observe(i)
    })

    lineObserver.observe(historyLine)

    headings.forEach(i => {
        observer.observe(i)
    })

    portfolioCards.forEach(i => {
        lineObserver.observe(i)
    })

    skillsItem.forEach(i => {
        observer.observe(i)
    })

    sections.forEach(i => {
        lineObserver.observe(i)
    })

}