
document.addEventListener('DOMContentLoaded', function() {
    const accordionChildren = document.querySelectorAll('.accordin_child');

    // Function to reset all accordion styles
    function resetAccordionStyles() {
        accordionChildren.forEach(child => {
            // Only apply width change for screens less than 1000px
            if (window.innerWidth <= 1000) {
                child.style.width = ''; // Reset to original width
            }
            
            child.style.borderRadius = window.innerWidth < 650 ? '20px' : '50px';

            child.style.background = 'transparent';

            // Hide all hidden paragraphs
            const hiddenPara = child.querySelector('.hidden_para');
            if (hiddenPara) {
                hiddenPara.classList.remove('active');
            }
        });
    }

    // Function to show a default hidden paragraph if no active
    function showDefaultHiddenPara() {
        const firstChild = document.querySelector('.accordin_child');
        if (firstChild) {
            // Apply width change for screens less than 1000px
            if (window.innerWidth <= 1000) {
                firstChild.style.width = '60%';
            }
            if (window.innerWidth <= 650) {
                firstChild.style.width = '90%';
            }           
            
            const hiddenPara = firstChild.querySelector('.hidden_para');
            if (hiddenPara) {
                hiddenPara.classList.add('active');
            }

firstChild.style.borderTopRightRadius = window.innerWidth < 650 ? '80px' : window.innerWidth < 1000 ? '120px' : '150px';
            firstChild.style.background = 'rgba(196, 196, 196, 0.2)';
        }
    }

// Add click event to each accordion child
accordionChildren.forEach(child => {
child.addEventListener('click', function() {
    // Reset all styles first
    resetAccordionStyles();

    // Toggle the hidden paragraph for this specific child
    const hiddenPara = this.querySelector('.hidden_para');

    if (hiddenPara) {
        // Check if any hidden paragraph is currently active
        const activeHiddenPara = document.querySelector('.hidden_para.active');

        if (activeHiddenPara && activeHiddenPara === hiddenPara) {
            // If clicking the same accordion, reset
            hiddenPara.classList.remove('active');
            this.style.borderTopRightRadius = '50px';
            this.style.background = 'transparent';
            
            // Reset width for screens less than 1000px
            if (window.innerWidth <= 1000) {
                this.style.width = ''; // Reset to original width
            }
        } else {
            // Activate this hidden paragraph
            // Apply width change for screens less than 1000px
            if (window.innerWidth <= 1000) {
                this.style.width = '60%';
            }
            if (window.innerWidth <= 650) {
                this.style.width = '90%';
                
            }
            
            hiddenPara.classList.add('active');
            this.style.borderTopRightRadius = '150px';
            this.style.background = 'rgba(196, 196, 196, 0.2)';
        }
    }

    // If no hidden paragraphs are active, show a default
    const activeHiddenParas = document.querySelectorAll('.hidden_para.active');
    if (activeHiddenParas.length === 0) {
        showDefaultHiddenPara();
    }
     // Set border-top-right-radius to 80px for active accordions if screen size is less than 650px
     if (window.innerWidth < 650) {
        this.style.borderTopRightRadius = '80px';
    }
});
});

// Handle window resize to adjust width dynamically
window.addEventListener('resize', function() {
const activeChild = document.querySelector('.hidden_para.active')?.closest('.accordin_child');

        if (activeChild) {
        if (window.innerWidth <= 650) {
    activeChild.style.width = '90%';
} else if (window.innerWidth <= 1000) {
    activeChild.style.width = '60%';
} else {
    activeChild.style.width = ''; // Reset to original width
}
        }
    });

    // Initially show the first hidden paragraph
    showDefaultHiddenPara();
});            
