dev dependencias
<code>npm i -D @types/cors @types/express @types/node  eslint eslint-config-prettier eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-n eslint-plugin-prettier eslint-plugin-promise prettier ts-node ts-node-dev tsconfig-paths typescript</code>

dependencias
<code>npm i axios cors dotenv express</code>

gitiguinore
<code>
touch .gitignore
</code>


sh gitiginore
<code>
cat <<EOL >> .gitignore
//Ignorar diretório node_modules
node_modules
//Ignorar arquivos de log
*.log
//Ignorar arquivos de package-lock.json
package-lock.json
//Ignorar arquivos de yarn.lock
yarn.lock
//Ignorar arquivos de configuração de ambiente
.env
EOL
</code>


prettier
<code>npm install --save-dev --save-exact prettier</code>

cirar arquivo de config
<code>node --eval "fs.writeFileSync('.prettierrc','{}\n')"</code>

instalar husk
<code>npm install --save-dev husky lint-staged</code>

iniciar husk
<code>npx husky init</code>

config husk
<code>node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')</code>
