__**Requesting Data**__

Make a GET request to the /translate endpoint (default localhost:3000/translate) with the following query parameters. All parameters are required.
  * text - Text to be translated.
  * in - The language the provided text is in (ISO 2 letter language code)
  * out - The language the text should be translated to (ISO 2 letter language code)
    
Example call:
> curl -X GET "http://localhost:3000/translate?in=en&out=es&text=Hello%20World"

__**Receiving Data**__

The GET request will return with one of the following status codes:
  * 200 - Success. The body of the response will contain the translated text.
  * 400 - Invalid request. Text, in, or out was not provided.
  * 500 - Server error. The microservice was unable to translate using the LibreTranslate API.
    
Example response:
> Status code 200, response body: "Hola Mundo"
    
__**UML Diagram**__
![261 UML](https://user-images.githubusercontent.com/114539219/218606202-df6059e0-8a32-436d-92bb-32a6ae4dbb39.png)
