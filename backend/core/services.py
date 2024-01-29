import requests

def filter_json(data):
    filtered = ['name','private','html_url','stargazers_count','watchers_count','language','forks_count','license','topics','visibility']
    filtered_data = {}
    for key in data:
        if key in filtered:
            filtered_data[key] = data[key]
    if filtered_data['owner'] is not None:
        filtered_data['avatar_url'] = filtered_data['owner']['avatar_url']
    return filtered_data


def fetch(tags:list,query:str):

    url = 'https://api.github.com/search/repositories'

    params = {
        'q': '',
        'sort': 'stars',
        'order': 'desc'
    }

    if len(tags) > 0:
        tag_query = ' '.join([f'topic:{tag}' for tag in tags])
        params['q'] = tag_query
    if len(query) > 0:
        params['q'] += query

    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            filtered_data = [filter_json(item) for item in data.get('items', [])]
            return filtered_data
        else:
            print(f"Error: {response.status_code}, {response.text}")
    except Exception as e:
        print(e)
        return None

