function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearch() {
        if (!searchInput) return;
        const query = searchInput.value.toLowerCase().trim();

        const cards = Array.from(document.querySelectorAll('.card, .product-card-mini, .category-card-mini, .product-card')).filter(card => {
            return !card.closest('.cart-summary') && !card.closest('.about-content');
        });

        // If no cards found on this page, redirect to index with query
        if (!cards || cards.length === 0) {
            if (query.length > 0) {
                window.location.href = 'index.html?q=' + encodeURIComponent(query);
            }
            return;
        }

        // If query is empty, reset all cards to visible
        if (query.length === 0) {
            cards.forEach(card => {
                card.style.display = '';
            });
            const noResultsMsg = document.getElementById('noResultsMsg');
            if (noResultsMsg) noResultsMsg.style.display = 'none';
            return;
        }

        let hasResults = false;

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();

            const imgEl = card.querySelector('img');
            if (imgEl && imgEl.alt) {
                text += ' ' + imgEl.alt.toLowerCase();
            }

            if (text.includes(query)) {
                card.style.display = '';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show or hide "No results" message
        let noResultsMsg = document.getElementById('noResultsMsg');
        if (!hasResults) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('p');
                noResultsMsg.id = 'noResultsMsg';
                noResultsMsg.innerText = 'No products found.';
                noResultsMsg.style.textAlign = 'center';
                noResultsMsg.style.fontSize = '18px';
                noResultsMsg.style.marginTop = '20px';
                noResultsMsg.style.color = '#666';
                noResultsMsg.style.width = '100%';

                const container = document.querySelector('.best-sellers-grid, .categories-slider, .products-grid, .container');
                if (container) {
                    container.parentElement.appendChild(noResultsMsg);
                }
            } else {
                noResultsMsg.style.display = 'block';
            }
        } else {
            if (noResultsMsg) noResultsMsg.style.display = 'none';
        }
    }

    if (searchInput) {
        // Handle cross-page search via URL param
        const urlParams = new URLSearchParams(window.location.search);
        const q = urlParams.get('q');
        if (q && q.trim().length > 0) {
            searchInput.value = q;
            // Wait for DOM to fully render cards before filtering
            setTimeout(performSearch, 300);
        }

        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch();
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
} else {
    initSearch();
}
