const autoClaim = () => {
  document.querySelector(".claimable-bonus__icon")?.click();
  setTimeout(() => autoClaim(), 60000);
};

autoClaim();
