# DepotInfo

仓库信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**DefaultBranch** | **string** | 默认分支 | [optional] [default to '']
**Description** | **string** | 仓库描述 | [optional] [default to '']
**GroupId** | **number** | 项目组Id | [optional] [default to undefined]
**GroupName** | **string** | 项目名称 | [optional] [default to '']
**GroupType** | **string** | 项目类型 | [optional] [default to '']
**HttpsUrl** | **string** | 仓库的https地址 | [optional] [default to '']
**Id** | **number** | 仓库id | [optional] [default to undefined]
**LastPushAt** | **number** | 最终push时间 | [optional] [default to undefined]
**Name** | **string** | 仓库名称 | [optional] [default to '']
**ProjectId** | **number** | 项目Id | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to '']
**RepoType** | **string** | 仓库类型,具体值为git或者svn | [optional] [default to '']
**SshUrl** | **string** | 仓库的ssh地址 | [optional] [default to '']
**VcsType** | **string** | 仓库类型,具体值为git或者svn | [optional] [default to '']
**WebUrl** | **string** | 仓库webURL | [optional] [default to '']
**IsShared** | **boolean** | 仓库是否开源 | [optional] [default to false]

## Example

```typescript
import { DepotInfo } from './api';

const instance: DepotInfo = {
    CreatedAt,
    DefaultBranch,
    Description,
    GroupId,
    GroupName,
    GroupType,
    HttpsUrl,
    Id,
    LastPushAt,
    Name,
    ProjectId,
    ProjectName,
    RepoType,
    SshUrl,
    VcsType,
    WebUrl,
    IsShared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
