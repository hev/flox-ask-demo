---
title: "flox build update catalogs"
description: "flox-build-update-catalogs - Update catalog lockfile for Nix expression builds"
group: "Manual"
order: 65
---

## NAME

flox-build-update-catalogs - Update catalog lockfile for Nix expression builds

## SYNOPSIS

```text
flox [<general-options>] build update-catalogs
     [-d=<path>]
```

## DESCRIPTION

Read the catalog configuration from `.flox/nix-builds.toml` and generate
(or regenerate) the lockfile at `.flox/nix-builds.lock`.

Each catalog entry in [`nix-builds.toml(5)`](/docs/man/nix-buildstoml) is resolved and pinned:
Nix source-type catalogs are locked with `nix flake prefetch`,
and FloxHub catalogs are locked against the FloxHub API.
The resulting lockfile pins every catalog to a specific revision,
ensuring reproducible builds.

Both `.flox/nix-builds.toml` and `.flox/nix-builds.lock` should be
committed to version control so that all collaborators build against
identical catalog inputs.

This command only works with path (local) environments.
It cannot be used with managed or remote environments.

If no `.flox/nix-builds.toml` file exists, the command prints a warning
with the expected file path and exits without error.

## OPTIONS

### Environment Options

If no environment is specified for an environment command,
the environment in the current directory
or the active environment that was last activated is used.

**`-d`, `--dir`**
Path containing a .flox/ directory.
### General Options

**`-h`, `--help`**
Prints help information.

The following options can be passed when running any `flox` subcommand but must
be specified _before_ the subcommand.

**`-v`, `--verbose`**
Increase logging verbosity.
Invoke multiple times for increasing detail.

**`-q`, `--quiet`**
Silence logs except for errors.

## EXAMPLES

### Lock catalog inputs

```console
$ flox build update-catalogs
```

## SEE ALSO

[`nix-builds.toml(5)`](/docs/man/nix-buildstoml)
[`flox-build(1)`](/docs/man/flox-build)
[`manifest.toml(5)`](/docs/man/manifesttoml)
