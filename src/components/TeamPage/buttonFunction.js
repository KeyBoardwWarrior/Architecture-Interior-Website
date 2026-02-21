let team_items={
    "one":
    [
        ['/src/assets/images/TeamPage/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',1,['John Doe','Architect']],
        ['/src/assets/images/TeamPage/ethan-haddox-NTjSR3zYpsY-unsplash.jpg',2,['Jane Doe','Team Lead']],
        ['/src/assets/images/TeamPage/christopher-campbell-rDEOVtE7vOs-unsplash.jpg',3,['Joel Doe','Founder']],
    ]
}

function left_click({ left, mid, right }, length) {
    return {
        left:  (left  - 1 + length) % length,
        mid:   (mid   - 1 + length) % length,
        right: (right - 1 + length) % length
    };
}

function right_click({ left, mid, right }, length) {
    return {
        left:  (left  + 1) % length,
        mid:   (mid   + 1) % length,
        right: (right + 1) % length
    };
}

export {team_items,left_click,right_click}