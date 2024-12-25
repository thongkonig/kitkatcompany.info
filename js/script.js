
function formatFieldLabel(label) {
    return label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
}

function checkCVLink(input) {
    if (!input.value.trim()) {
        input.value = "";
    }
}

function gatherFormData() {
    const fields = ["fullName", "contact", "timeZone", "phone", "workingHours", "linkedin", "introduction", "cvLink"];
    const data = {};

    fields.forEach(field => {
        const value = document.getElementById(field).value;
        data[formatFieldLabel(field)] = value;
    });

    return data;
}

function generateMailToLink(subject, body, email = "info@kitkatcompany.cc") {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function submitViaGmail() {
    const formData = gatherFormData();
    const subject = `${formData["Full Name"]} - Digital Marketing Specialist Application`;
    const body = Object.entries(formData)
        .map(([key, value]) => `${key === 'Cv Link' ? 'CURRICULUM VITAE (CV)' : key.toUpperCase()}: ${value}`)
        .join("\n\n");

    const mailtoLink = `https://mail.google.com/mail/u/0/?fs=1&to=info@kitkatcompany.cc&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&tf=cm`;
    window.open(mailtoLink, '_blank');
}

function submitViaEmail() {
    const formData = gatherFormData();
    const subject = `${formData["Full Name"]} - Digital Marketing Specialist Application`;
    const body = Object.entries(formData)
        .map(([key, value]) => `${key === 'Cv Link' ? 'CURRICULUM VITAE (CV)' : key.toUpperCase()}: ${value}`)
        .join("\n\n");

    const mailtoLink = generateMailToLink(subject, body);
    window.location.href = mailtoLink;
}
