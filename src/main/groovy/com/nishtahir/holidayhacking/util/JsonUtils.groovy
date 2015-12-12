package com.nishtahir.holidayhacking.util

import com.fasterxml.jackson.databind.ObjectMapper


class JsonUtils {

    /**
     * Converts object to JSON notation
     * @param data
     * @return String representation of JSON object
     */
    public static String dataToJson(data) {
        try {
            StringWriter writer = new StringWriter()
            new ObjectMapper().writeValue(writer, data);
            return writer.toString();
        } catch (IOException e){

        }
    }
}
