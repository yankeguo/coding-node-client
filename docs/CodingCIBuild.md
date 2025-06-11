# CodingCIBuild

CodingCiBuild 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Branch** | **string** | 分支 | [default to '']
**Cause** | **string** | 触发原因 | [default to '']
**CodingCIId** | **string** | 构建唯一标识 | [default to '']
**CommitId** | **string** | Git Commit ID | [default to '']
**CreatedAt** | **number** | 构建创建时间 | [default to undefined]
**Duration** | **number** | 构建执行时间 QUEUED  等待构建 INITIALIZING  初始化 NOT_BUILT  准备构建 RUNNING  运行中 SUCCEED  成功 FAILED  失败 ABORTED  被取消 TIMEOUT  超时 | [default to undefined]
**EnvList** | [**Array&lt;CIJobEnv&gt;**](CIJobEnv.md) | 构建使用的环境变量 | [optional] [default to undefined]
**FailedMessage** | **string** | 失败原因 | [default to '']
**Id** | **number** | 构建 ID | [default to undefined]
**JenkinsFileContent** | **string** | 本次构建的 Jenkinsfile | [default to '']
**JobId** | **number** | 构建计划 ID | [default to undefined]
**NodeObtainedAt** | **number** | 获取到执行机的时间，如果为负数表示还未获取到构建节点 | [optional] [default to undefined]
**Number** | **number** | 构建序号 | [default to undefined]
**StartedAt** | **number** | 开始构建时间，如果为负数就是默认值表示还未开始 | [optional] [default to undefined]
**Status** | **string** | 构建当前状态 | [default to '']
**StatusNode** | **string** | 构建进行到了哪个 stage/node | [default to '']
**TestResult** | [**CIBuildTestResult**](CIBuildTestResult.md) |  | [default to undefined]

## Example

```typescript
import { CodingCIBuild } from './api';

const instance: CodingCIBuild = {
    Branch,
    Cause,
    CodingCIId,
    CommitId,
    CreatedAt,
    Duration,
    EnvList,
    FailedMessage,
    Id,
    JenkinsFileContent,
    JobId,
    NodeObtainedAt,
    Number,
    StartedAt,
    Status,
    StatusNode,
    TestResult,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
