import React, { useEffect } from 'react';

/**
 * Utility component for loading external scripts optimally
 * @param {Object} props Component props
 * @param {string} props.src Script source URL
 * @param {boolean} props.async Whether to load script asynchronously
 * @param {boolean} props.defer Whether to defer script loading
 * @param {string} props.id Optional ID for the script tag
 * @param {Function} props.onLoad Callback when script loads successfully
 * @param {Function} props.onError Callback when script fails to load
 */
const ScriptLoader = ({ 
  src, 
  async = true, 
  defer = false, 
  id = "", 
  onLoad = () => {}, 
  onError = () => {} 
}) => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.getElementById(id);
    
    if (existingScript) {
      return; // Script already loaded
    }

    // Create script element
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    if (id) script.id = id;
    
    // Event handlers
    script.onload = onLoad;
    script.onerror = onError;
    
    // Append to document
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.getElementById(id)) {
        document.body.removeChild(script);
      }
    };
  }, [src, async, defer, id, onLoad, onError]);
  
  return null; // This component doesn't render anything
};

export default ScriptLoader; 