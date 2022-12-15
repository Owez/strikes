import { all } from '$lib/data';
import { getAction } from '$lib/strike';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = (({ params }) => {
    const data = getAction(all, params.id)
    if (data != null) {
        return { data }
    }
    throw error(404, 'Not found');
});