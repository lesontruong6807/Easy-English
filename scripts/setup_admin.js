const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const envContent = fs.readFileSync('.env.local', 'utf-8');
const env = {};
envContent.split(/\r?\n/).forEach(line => {
  const idx = line.indexOf('=');
  if (idx > 0) {
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  console.log('--- Step 1: Listing existing users ---');
  const { data: { users }, error: listErr } = await supabase.auth.admin.listUsers();
  if (listErr) {
    console.error('Error listing users:', listErr);
    return;
  }
  
  for (const u of users) {
    console.log(`Deleting existing user: ${u.email} (${u.id})`);
    const { error: delErr } = await supabase.auth.admin.deleteUser(u.id);
    if (delErr) {
      console.warn(`Could not delete user ${u.id}:`, delErr);
    } else {
      console.log(`Successfully deleted user ${u.id}`);
    }
  }

  console.log('--- Step 2: Creating Admin user truongleson687 ---');
  const adminEmail = 'truongleson687@easyenglish.app';
  const adminPassword = 'Son060807@';
  
  const { data: newUser, error: createErr } = await supabase.auth.admin.createUser({
    email: adminEmail,
    password: adminPassword,
    email_confirm: true,
    user_metadata: {
      username: 'truongleson687',
      full_name: 'Trương Lê Sơn',
      role: 'admin'
    }
  });

  if (createErr) {
    console.error('Error creating admin user:', createErr);
    return;
  }

  console.log('Admin user created:', newUser.user.id);

  console.log('--- Step 3: Checking if profiles has username column or upserting profile ---');
  // Try upserting with username
  let upsertRes = await supabase.from('profiles').upsert({
    id: newUser.user.id,
    full_name: 'Trương Lê Sơn',
    role: 'admin',
    username: 'truongleson687'
  });

  if (upsertRes.error) {
    console.log('Upserting standard profile without username column:', upsertRes.error.message);
    upsertRes = await supabase.from('profiles').upsert({
      id: newUser.user.id,
      full_name: 'Trương Lê Sơn',
      role: 'admin'
    });
  }

  if (upsertRes.error) {
    console.error('Error upserting profile:', upsertRes.error);
  } else {
    console.log('Admin profile upserted successfully!');
  }

  console.log('--- Step 4: Verify login with signInWithPassword ---');
  const anonClient = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const { data: loginData, error: loginErr } = await anonClient.auth.signInWithPassword({
    email: adminEmail,
    password: adminPassword
  });

  if (loginErr) {
    console.error('Login test failed:', loginErr);
  } else {
    console.log('Login test SUCCESSFUL for admin!', loginData.user.id, loginData.user.email);
  }
}

run();
