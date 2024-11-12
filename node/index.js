import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './config/configSupabase.js';

dotenv.config();


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/test', async (req, res) => {
    const {data, error} = supabase.from('songs').select('*');
    try { 
        const {data, error} = await supabase.from('songs').select('*');
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    } 
    catch (err) {
        console.error(err);
        console.log(data);
    res.send("Test");
    }
})

app.get('/About', (req, res) => {
    res.send('About Heinz :D');
})



app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

