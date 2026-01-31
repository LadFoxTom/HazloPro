# 🐛 Debug Guide

## Probleem: Menu items werken niet, workshops niet zichtbaar

### Mogelijke Oorzaken:

1. **JavaScript Error in Console**
   - Open browser console (F12)
   - Check voor errors
   - Meestal: "Cannot read property of undefined" of "async/await" errors

2. **API Server niet actief**
   - Check of server draait: http://localhost:3001/api/workshops
   - Start server: `npm run dev`

3. **CORS Probleem**
   - Als frontend op andere poort draait dan backend
   - Check `API_BASE_URL` in app.js

### Fixes Toegepast:

✅ `navigateTo()` is nu `async` en gebruikt `await` voor render functies
✅ `renderHomePage()` en `renderWorkshopsPage()` zijn `async` met proper error handling
✅ Fallback naar static data als API faalt
✅ Betere error handling in workshop card creation
✅ Workshop slug detection verbeterd

### Test Stappen:

1. **Open Browser Console (F12)**
   ```javascript
   // Test API
   fetch('http://localhost:3001/api/workshops')
     .then(r => r.json())
     .then(console.log)
     .catch(console.error)
   ```

2. **Check of server draait**
   ```bash
   curl http://localhost:3001/api/workshops
   ```

3. **Check JavaScript errors**
   - Open console
   - Refresh pagina
   - Kijk voor errors

### Als het nog steeds niet werkt:

1. **Hard refresh**: Ctrl+Shift+R (of Cmd+Shift+R op Mac)
2. **Clear cache**: Browser cache legen
3. **Check network tab**: Zie of API calls worden gemaakt
4. **Check server logs**: Zie terminal waar server draait
