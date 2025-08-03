const formatDueDate = (dateString) => {
  if (!dateString) {
    return '';
  }

  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch (error) {
    console.error("Invalid date provided to formatDueDate:", dateString);
    return '';
  }
};

const formatRelativeTime = (dateString) => {
  if (!dateString) {
    return '';
  }

  try {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.round((now - date) / 1000);

    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);

    if (seconds < 60) {
      return 'just now';
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days === 1) {
      return 'yesterday';
    } else {
      return formatDueDate(date);
    }
  } catch (error) {
    console.error("Invalid date provided to formatRelativeTime:", dateString);
    return '';
  }
};

export { formatDueDate, formatRelativeTime };
