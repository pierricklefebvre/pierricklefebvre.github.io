/**
 * @return void
 */
function onSkillsDropdownClick() {
    const dropdown = document.getElementById('skills-dropdown');
    const dropdownArrow = document.getElementById('dropdown-arrow');

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdownArrow.classList.add('rotate-180');
    } else {
        dropdown.classList.add('hidden');
        dropdownArrow.classList.remove('rotate-180');
    }
}

/**
 * @param string id
 * @return void
 */
function scrollToSection(id) {
    updateActiveLinkStyle(id);

    const element = document.getElementById(id);

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

/**
 * @param string id
 * @return void
 */
function updateActiveLinkStyle(id) {
    cleanAllLinkStyle();

    const element = document.getElementById(id + '-link');
    element.classList.remove('text-slate-200', 'hover:text-slate-50', 'hover:bg-slate-950');
    element.classList.add('bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-slate-950');

    if (element.children[0] !== undefined) {
        element.children[0].classList.remove('text-slate-200', 'group-hover:text-slate-50');
        element.children[0].classList.add('text-slate-950');
    }
}

/**
 * @return void
 */
function cleanAllLinkStyle() {
    const links = document.getElementsByClassName('aside-link');

    for (let element of links) {
        element.classList.remove('bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-slate-950');
        element.classList.add('text-slate-200', 'hover:text-slate-50', 'hover:bg-slate-950');

        if (element.children[0] !== undefined) {
            element.children[0].classList.remove('text-slate-950');
            element.children[0].classList.add('text-slate-200', 'group-hover:text-slate-50');
        }
    }
}

/**
 * @return string|null
 */
function getSanitizedHash() {
    let anchor = window.location.hash;

    if (anchor === '') {
        return null;
    }

    return anchor.substring(1).split('?')[0];
}

updateActiveLinkStyle(getSanitizedHash() ?? 'about');
