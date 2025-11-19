document.addEventListener('DOMContentLoaded', function() {
    
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // คำนวณระยะการเลื่อน (scroll)
    // เราจะเลื่อนทีละ 3 การ์ด (หรือตามขนาดที่เหมาะสม)
    const getScrollAmount = () => {
        // หาความกว้างของการ์ดใบแรก (รวม margin)
        const firstCard = carousel.querySelector('.lesson-card');
        if (firstCard) {
            const cardStyle = window.getComputedStyle(firstCard);
            const cardMargin = parseFloat(cardStyle.marginRight) || parseFloat(cardStyle.gap) || 24; // 24px คือ gap
            return (firstCard.offsetWidth + cardMargin) * 3; // เลื่อนทีละ 3 การ์ด
        }
        return 300; // ค่าเริ่มต้นถ้าหาการ์ดไม่เจอ
    };

    // Event Listener สำหรับปุ่มถัดไป
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    // Event Listener สำหรับปุ่มก่อนหน้า
    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

});