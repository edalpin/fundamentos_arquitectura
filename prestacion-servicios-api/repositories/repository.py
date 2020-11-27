import json

from config.Settings import settings


def read_repository(repository):
    path = f"{settings.REPOSITORIES_DIR}/{repository}.json"
    data = []
    with open(path) as json_file:
        data = json.load(json_file)
    return data


def add_to_repository(repository, new_data):
    path = f"{settings.REPOSITORIES_DIR}/{repository}.json"
    data = read_repository(repository)
    data.append(new_data)

    with open(path, "w") as outfile:
        json.dump(data, outfile, indent=4)