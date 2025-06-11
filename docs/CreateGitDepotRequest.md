# CreateGitDepotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotName** | **string** | 仓库名称 | [default to undefined]
**Description** | **string** | 仓库的描述信息 | [optional] [default to undefined]
**ProjectId** | **number** | 项目id | [default to undefined]
**Shared** | **boolean** | 仓库是否允许公开访问 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitDepotRequest } from './api';

const instance: CreateGitDepotRequest = {
    DepotName,
    Description,
    ProjectId,
    Shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
