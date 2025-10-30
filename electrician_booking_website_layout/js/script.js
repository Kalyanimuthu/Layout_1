const upiButton = document.getElementById('upiButton');
const netButton = document.getElementById('netButton');
const cardButton = document.getElementById('cardButton');
const paymentButtons = [upiButton, netButton, cardButton].filter(btn => btn !== null);
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailid = document.getElementById('email-id');
const phoneNumber = document.getElementById('phone-number');
const address = document.getElementById('address');
const loginSubmitButton = document.getElementById('loginSubmitButton');
const signInButton = document.getElementById('signInButton');
const modalSubmitButton = document.getElementById('modalSubmitButton');
const verifyModal = document.getElementById('verificationModal');
const verifyBtn = document.getElementById('verifyButton'); 
const cartIcon = document.getElementById('cartIcon'); 
const cartModal = document.getElementById('cartModal');
const cartCloseBtn = document.getElementById('cartCloseButton');
const qtyMinusBtn = document.getElementById('qtyMinus');
const qtyPlusBtn = document.getElementById('qtyPlus');
const qtyDisplay = document.getElementById('qtyDisplay');
const totalAmountDisplay = document.getElementById('totalAmount');
const amountRemainingDisplay = document.getElementById('amountRemaining');
const modal = document.getElementById('calendar-modal');
const dateDisplay = document.getElementById('date-display');
const selectedDayDisplay = document.getElementById('selected-day-display');
const monthYearDisplay = document.getElementById('month-year-display');
const calendarGrid = document.getElementById('calendar-grid');
const paynowBtn = document.getElementById('paynowbtn');
const successModal = document.getElementById('payment-success-modal');
const successCloseBtn = document.getElementById('successCloseBtn');


// --- 2. Modal Helper Functions ---
function openModal(e, modalElement) {
    if (e) e.preventDefault(); 
    if (modalElement) {
        modalElement.classList.remove('hidden');
    }
}

function closeModal(modalElement) {
    if (modalElement) {
        modalElement.classList.add('hidden');
    }
}

// --- 3. Verification Modal Logic (CLEANED UP) ---

if (loginSubmitButton) {
    loginSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(e, verifyModal); 
    });
}
if (modalSubmitButton) {
    modalSubmitButton.addEventListener('click', (e) => {
    
        e.preventDefault(); 
    
        closeModal(verifyModal); 

    
        window.location.href = 'home.html'; 
    
    });
}

if (verifyBtn) {
    verifyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(e, verifyModal);
    });
}


if (signInButton) {
    signInButton.addEventListener('click', (e) => {

        e.preventDefault(); 
        

        window.location.href = 'home.html'; 
    });
}


if (verifyModal) {
    verifyModal.addEventListener('click', (e) => {
        const targetId = e.target.id;
        if (targetId === 'modalBackButton') {
            e.preventDefault(); 
            closeModal(verifyModal); 
        } 
    });
}

// --- 4. Cart Modal Logic ---
if (cartIcon && cartModal) {
    cartIcon.addEventListener('click', (e) => openModal(e, cartModal));
}
if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', () => closeModal(cartModal));
}

// --- 5. Cart Quantity and Display Logic ---
if (qtyMinusBtn && qtyPlusBtn && qtyDisplay && totalAmountDisplay && amountRemainingDisplay) {
    const basePrice = 109;
    const offerThreshold = 200; 

    function updateCart(newQty) {
        let currentQty = parseInt(qtyDisplay.textContent);
        if (newQty < 1) newQty = 1;
        if (newQty > 4) newQty = 4; 

        const newTotal = newQty * basePrice;
        const remainingForOffer = Math.max(0, offerThreshold - newTotal);

        qtyDisplay.textContent = newQty;
        totalAmountDisplay.textContent = `₹${newTotal}`;
        
        const offerBanner = amountRemainingDisplay.parentElement;
        if (remainingForOffer === 0) {
             offerBanner.textContent = '🥳 Offer Applied: Visitation fee waived!';
             offerBanner.classList.remove('bg-orange-300', 'text-gray-700');
             offerBanner.classList.add('bg-green-300', 'text-green-900');
        } else {
             offerBanner.innerHTML = `Add ₹<span id="amountRemaining">${remainingForOffer}</span> more to save on visitation fees`;
             offerBanner.classList.add('bg-orange-300', 'text-gray-700');
             offerBanner.classList.remove('bg-green-300', 'text-green-900');
        }
    }

    updateCart(parseInt(qtyDisplay.textContent) || 1); 

    qtyPlusBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtyDisplay.textContent);
        updateCart(currentQty + 1);
    });

    qtyMinusBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtyDisplay.textContent);
        updateCart(currentQty - 1);
    });
}

// --- 6. Calendar Modal Logic (Placeholder functions) ---

let currentDisplayedDate = new Date();
let selectedDate = null;


function openCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        modal.classList.remove('hidden');
        renderCalendar(currentDisplayedDate);
    }
}

function closeCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function renderCalendar(date) {
    const monthYearDisplay = document.getElementById('month-year-display');
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid || !monthYearDisplay) return;

    const year = date.getFullYear();
    const month = date.getMonth(); 
    
    const monthName = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearDisplay.textContent = monthName;

    const firstDayOfMonth = new Date(year, month, 1).getDay(); 
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    calendarGrid.innerHTML = ''; 


    const startDay = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); 
    for (let i = 0; i < startDay; i++) {
        calendarGrid.innerHTML += '<div></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const fullDate = new Date(year, month, day);
        const dayButton = document.createElement('button');
        dayButton.textContent = day;
        dayButton.className = 'w-8 h-8 rounded-full flex items-center justify-center transition hover:bg-gray-100';
        dayButton.onclick = () => selectDay(fullDate, dayButton);

        const today = new Date();
        const isToday = (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());
        const isSelected = selectedDate && (day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear());
        
        if (isToday) {
            dayButton.classList.add('border-2', 'border-deep-blue', 'font-bold');
        }
        if (isSelected) {
            dayButton.classList.add('bg-deep-blue', 'text-white', 'hover:bg-deep-blue');
        } else if (isToday) {
             dayButton.classList.add('text-deep-blue');
        }

        calendarGrid.appendChild(dayButton);
    }
}

function selectDay(dateObj, button) {
    selectedDate = dateObj;


    document.querySelectorAll('#calendar-grid button').forEach(btn => {
        btn.classList.remove('bg-deep-blue', 'text-white');
    });


    if (button) {
        button.classList.add('bg-deep-blue', 'text-white'); 
    }

    const selectedDayDisplay = document.getElementById('selected-day-display');
    if (selectedDayDisplay) {
        const options = { weekday: 'short', day: '2-digit', month: 'long' };
        const formattedHeader = dateObj.toLocaleDateString('en-US', options);
        selectedDayDisplay.textContent = formattedHeader.replace(',', ''); 
    }
}

function changeMonth(delta) {
    currentDisplayedDate.setMonth(currentDisplayedDate.getMonth() + delta);
    renderCalendar(currentDisplayedDate);
}

function selectDate() {
    const dateDisplay = document.getElementById('date-display');
    if (selectedDate && dateDisplay) {
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const year = String(selectedDate.getFullYear()).slice(2);
        
        dateDisplay.textContent = `${day}/${month}/${year}`;
    }
    closeCalendarModal();
}


document.addEventListener('DOMContentLoaded', () => {

    selectDay(new Date()); 
});

// --- 7. Payment Success Modal Logic ---

function showSuccessModal(e) {
    if (e) e.preventDefault(); 
    if (successModal) {
        successModal.classList.remove('hidden');
    }
}

function closeSuccessModal() {
    if (successModal) {
        successModal.classList.add('hidden');
        
    }
}

if (paynowBtn) {
    paynowBtn.addEventListener('click', showSuccessModal);
}
if (successCloseBtn) {
    successCloseBtn.addEventListener('click', closeSuccessModal);
}
// service dropdown
const servicesLink = document.getElementById('servicesDropdownLink');
const servicesDropdown = document.getElementById('servicesDropdown');

if (servicesLink && servicesDropdown) {
    servicesLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        
        servicesDropdown.classList.toggle('opacity-0');
        servicesDropdown.classList.toggle('invisible');
        servicesDropdown.classList.toggle('scale-95');
        servicesDropdown.classList.toggle('opacity-100');
        servicesDropdown.classList.toggle('visible');
        servicesDropdown.classList.toggle('scale-100');
    });

    
    document.addEventListener('click', (e) => {
        if (!servicesLink.contains(e.target) && !servicesDropdown.contains(e.target)) {
    
            servicesDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
            servicesDropdown.classList.remove('opacity-100', 'visible', 'scale-100');
        }
    });
}
if (firstNameInput) {
    firstNameInput.addEventListener('focus', () => {
         firstNameInput.value = 'Narmatha';
    });
}
if (lastNameInput) {
    lastNameInput.addEventListener('focus', () => {
         lastNameInput.value = 'T';
    });
}

if (emailid) {
    emailid.addEventListener('focus', () => {
         emailid.value = 'name@gmail.com';
    });
}
if (phoneNumber) {
    phoneNumber.addEventListener('focus', () => {
         phoneNumber.value = 'XXXXXXXXXX';
    });
}

if (address) {
    address.addEventListener('focus', () => {
         address.value = '2/38, east street';
    });
}

function deactivateAllButtons() {
    paymentButtons.forEach(button => {
        button.classList.remove('bg-primary-orange/50');
        
    });
}
function activateButton(button, e) {
    if (e) e.preventDefault(); 
    deactivateAllButtons();
    button.classList.add('bg-primary-orange/50');
    
    
}

if (upiButton) {
    upiButton.addEventListener('click', (e) => activateButton(upiButton, e));
}
if (netButton) {
    netButton.addEventListener('click', (e) => activateButton(netButton, e));
}
if (cardButton) {
    cardButton.addEventListener('click', (e) => activateButton(cardButton, e));
}