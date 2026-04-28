const doctorData = {
    "Dr. Maya Patel - Cardiology": {
        fees: 800,
        time: "10 AM - 2 PM",
        details: "Heart specialist with 10+ years experience"
    },
    "Dr. Aisha Khan - Dermatology": {
        fees: 600,
        time: "11 AM - 4 PM",
        details: "Skin expert with modern treatments"
    },
    "Dr. Marcus Lee - Pediatrics": {
        fees: 500,
        time: "9 AM - 1 PM",
        details: "Child care specialist"
    },
    "Dr. Neha Sharma - Gynecology": {
        fees: 700,
        time: "10 AM - 3 PM",
        details: "Women health expert"
    },
    "Dr. John Carter - Orthopedics": {
        fees: 900,
        time: "12 PM - 5 PM",
        details: "Bone specialist"
    },
    "Dr. Riya Mehta - Neurology": {
        fees: 1000,
        time: "2 PM - 6 PM",
        details: "Brain specialist"
    },
    "Dr. David Smith - General Physician": {
        fees: 400,
        time: "9 AM - 12 PM",
        details: "Primary healthcare expert"
    },
    "Dr. Pooja Verma - Dentist": {
        fees: 500,
        time: "11 AM - 3 PM",
        details: "Dental specialist"
    },
    "Dr. Rahul Singh - ENT Specialist": {
        fees: 550,
        time: "1 PM - 5 PM",
        details: "ENT expert"
    },
    "Dr. Emily Watson - Psychiatrist": {
        fees: 1200,
        time: "3 PM - 7 PM",
        details: "Mental health expert"
    }
};

// On doctor select
document.getElementById("doctor").addEventListener("change", function() {

    let selected = this.value;

    if (doctorData[selected]) {

        document.getElementById("doctorInfo").style.display = "block";

        document.getElementById("docName").innerText = selected;
        document.getElementById("docFees").innerText = doctorData[selected].fees;
        document.getElementById("docTime").innerText = doctorData[selected].time;
        document.getElementById("docDetails").innerText = doctorData[selected].details;

    } else {
        document.getElementById("doctorInfo").style.display = "none";
    }
});


// FORM SUBMIT (same as before)
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successMsg").innerText =
        "✅ Appointment booked successfully!";
    
    this.reset();
    document.getElementById("doctorInfo").style.display = "none";
});