import os

appEnv = os.getenv('APP_ENV')
config = {
    # APP_ENV should only contains 'PROD', 'STAGING', 'DEV'
    'AppEnv': appEnv,
    'AppPort': os.getenv('APP_PORT'),
    'AppAdminConfirmKey': os.getenv('APP_ADMIN_CONFIRM_KEY'),

    'DafaultPagination': int(os.getenv('DEFAULT_PAGINATION')),
    'DafaultUserLTLimit': int(os.getenv('DEFAULT_USER_LT_LIMIT')),
    'DafaultUserLTExpiration': int(os.getenv('DEFAULT_USER_LT_EXP')),

    'MongoURI': os.getenv(f'{ appEnv }_MONGO_URI'),
    'DBName': os.getenv(f'{ appEnv }_MONGO_DB_NAME'),

    'RootLogsDir': os.getenv('ROOT_LOGS_DIR'),
    'RootWebappDir': os.getenv('ROOT_WEBAPP_DIR'),
    'RootAssetsDir': os.getenv('ROOT_ASSETS_DIR'),
    'RootWebappEndpoint': os.getenv('ROOT_WEBAPP_ENDPOINT'),
    'RootAssetsEndpoint': os.getenv('ROOT_ASSETS_ENDPOINT'),
    'RootApiEndpoint': os.getenv('ROOT_API_ENDPOINT'),

    'JwtExp': int(os.getenv('JWT_EXPIRATION')),
    'JwtSecretKey': os.getenv('JWT_SECRET_KEY')
}