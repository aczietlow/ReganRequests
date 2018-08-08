function saveOptions(e) {
    browser.storage.sync.set({
        it_email: document.querySelector("#it_email").value,
        email: document.querySelector("#email").value
    });
    e.preventDefault();
}

// @TODO need to fix storage api to save preferences.
function restoreOptions() {
    var storageItem = browser.storage.managed.get('it_email');
    storageItem.then((res) => {
        document.querySelector("#managed-colour").innerText = res.it_email;
    });

    var gettingItem = browser.storage.sync.get('it_email');
    gettingItem.then((res) => {
        document.querySelector("#it_email").value = res.it_email || '<help@me.com>';
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);